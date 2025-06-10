const participantResponseSerializer = (participant) => ({
    id: participant.id,
    referenceNumber: participant.referenceNumber,
    workshopId: participant.workshopId,
    name: participant.name,
    photo: participant.photo,
    description: participant.description,
    participantRoleId: participant.participantRoleId,
    isOnlineParticipation: participant.isOnlineParticipation,
    ownerId: participant.ownerId,
    isActive: participant.isActive,
    approvedAt: participant.approvedAt,
    createdAt: participant.createdAt,
    updatedAt: participant.updatedAt,
    isApproved: participant.isApproved,
    createdById: participant.createdById,
    updatedById: participant.updatedById,
    approvedById: participant.approvedById,
    isActiveMicrophone: participant.isActiveMicrophone,
    isHandRaised: participant.isHandRaised, 

    created: participant.created,
    updated: participant.updated,
    participants: participant.participants
  });
  
  module.exports = participantResponseSerializer;