'use strict';

const mongoose = require('mongoose');
const moment = require('moment');
const Twilio = require('twilio');

const accountSid = 'AC5b645eaecc9d01a9e87e0be6d245a0f2';
const authToken = 'c257d59dab35079fb3849c28880bb6b2';
const number = '+18449090856';

const AppointmentSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  notification: Number,
  timeZone: String,
  time: {type: Date, index: true},
});

AppointmentSchema.methods.requiresNotification = function(date) {
  return Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
                          .diff(moment(date).utc())
                        ).asMinutes()) === this.notification;
};

AppointmentSchema.statics.sendNotifications = function(callback) {
  const searchDate = new Date();
  Appointment
    .find()
    .then(function(appointments) {
      appointments = appointments.filter(function(appointment) {
              return appointment.requiresNotification(searchDate);
      });
      if (appointments.length > 0) {
        sendNotifications(appointments);
      }
    });

    /**
    * Send messages to all appoinment owners via Twilio
    * @param {array} appointments List of appointments.
    */
    function sendNotifications(appointments) {
        const client = new Twilio(accountSid, authToken);
        appointments.forEach(function(appointment) {
            // Create options to send the message
            const options = {
                to: `+ ${appointment.phoneNumber}`,
                from: number,
                /* eslint-disable max-len */
                body: `Hi ${appointment.name}. Just a reminder that you have an appointment coming up.`,
                /* eslint-enable max-len */
            };

            // Send message
            client.messages.create(options, function(err, response) {
                if (err) {
                    console.error(err);
                } else {
                    let masked = appointment.phoneNumber.substr(0,
                        appointment.phoneNumber.length - 5);
                    masked += '*****';
                    console.log(`Message sent to ${masked}`);
                }
            });
        });

        if (callback) {
          callback.call();
        }
    }
};


const Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = Appointment;
