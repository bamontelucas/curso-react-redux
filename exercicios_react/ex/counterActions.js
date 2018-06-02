const inc = () => ({
    type: 'INC'
});

const dec = () => ({
    type: 'DEC'
});

const stepChanged = e => ({
    type: 'STEP_CHANGED',
    payload: e.target.value
});

// export {inc, dec, stepChanged};
export default {inc, dec, stepChanged};