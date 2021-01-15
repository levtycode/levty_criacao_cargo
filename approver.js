var _object = {
    _executor: null,
    approvers: null
};

function process() {
    if (_object._executor){
    
        const stepId = _pin._activeElements.userTaskValidatePositionRoleCreationPdn[0]._id;
        const stepDescription = _pin._activeElements.userTaskValidatePositionRoleCreationPdn[0]._name;
        
        const index = getIndexOfStepApprover(stepId);
        const existsApprover = index && index !== -1;
        
        if (_object.action && _object.action === "approve") {
            
            if(existsApprover) { 		
                updateStepApprover(index, _object._executor, stepId, stepDescription); 
            }
            else { 
                addStepApprover(approver, stepId, stepDescription)  
            }
        }
        else { 
            if(existsApprover) { 
                removeStepApprover(stepId);
            }
        }
    }
}

function getIndexOfStepApprover(stepId) {
    return (_object.approvers || []).findIndex(app => {
        return app.stepId === stepId;
    });
}

function addStepApprover(approver, stepId, stepDescription) {
	if(!_object.approvers || !_object.approvers.length) {
		_object.approvers = [];
	}

	_object.approvers.push({
		"approver": approver,
		"stepId": stepId,
		"processStep": stepDescription
    });
    
    return _object.approvers;
}

function updateStepApprover(index, approver, stepId, stepDescription) {
	_object.approvers[index] = {
		"approver": approver,
		"stepId": stepId,
		"processStep": stepDescription
    };

    return _object.approvers;
}

function removeStepApprover(stepId) {
    _object.approvers = _object.approvers.filter(app => app.stepId !== stepId);
    return _object.approvers;
}

function setArrayApprovers(arr) {
    _object.approvers = arr;
}

function clearApprovers() {
    _object.approvers = [];
}

module.exports = {
    process,
    setArrayApprovers,
    clearApprovers,
    addStepApprover,
    getIndexOfStepApprover,
    updateStepApprover,
    removeStepApprover
}