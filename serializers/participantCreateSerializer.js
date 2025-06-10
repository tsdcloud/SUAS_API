const Joi = require('joi');

const participantCreateSerializer = Joi.object({
    workshopId: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    photo: Joi.string().optional(),
    participantRoleId: Joi.string().required(),
    ownerId: Joi.string().required(),
    isOnlineParticipation: Joi.boolean().required(),
});

module.exports = participantCreateSerializer;