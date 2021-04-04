import axios from 'axios';
// import React, { useState } from 'react';

const MockAPI = async () => {
    const { data } = await axios.get('https://605b218e27f0050017c063ab.mockapi.io/users', {
    })
    return data;
}

export default MockAPI;