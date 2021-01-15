require('@jest/globals');
const { setArrayApprovers, clearApprovers, addStepApprover, updateStepApprover, removeStepApprover } = require('./approver');

var approversDefault;

beforeEach(() => {
    approversDefault = [
        {
            approver: {},
            stepId: "userTaskPdn",
            processStep: "PDN"
        }
    ];
    
    setArrayApprovers(approversDefault);
});

afterEach(() => {
    clearApprovers();
});

describe('approver actions', () => {
   it('should add new approver', () => {
        var newApprover = {}, stepId = "userTaskR&O", stepDescription = "R&O";
        
        var result = addStepApprover(newApprover, stepId, stepDescription);
                
        expect(result.length).toEqual(2);
        expect(result[1].approver).not.toBeNull(); 
        expect(result[1].stepId).toEqual(stepId);
        expect(result[1].processStep).toEqual(stepDescription);
    })

    it('should update approver', () => {
        var newApprover = {}, stepId = "userTaskPdnUpdated", stepDescription = "PDN updated";
        
        var result = updateStepApprover(0, newApprover, stepId, stepDescription);
                
        expect(result.length).toEqual(1);
        expect(result[0].approver).not.toBeNull(); 
        expect(result[0].stepId).toEqual(stepId);
        expect(result[0].processStep).toEqual(stepDescription);
    })

    it('should delete approver', () => {
        var result = removeStepApprover("userTaskPdn");
        expect(result).not.toBeNull();
        expect(result.length).toEqual(0);
    });
});