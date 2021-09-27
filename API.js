import { getProfileData } from "./Redux/AuthReducer";

const API = {

    async getPersonName(id) {
        console.log("personName",)
        let response = await fetch("http://qr.st-ing.com/findname", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: id,
                verifyHash:"xh3tXnlHIJr+kd9c+gZdu7mssLgFBcRYqkJtbBf1phU="
            }),
        });

        let personName = await response.json();
        return personName.employeeName;
    },

       async getHistoryData (data) {

        try {
            let response = await fetch("http://qr.st-ing.com/period", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    ...data,
                    verifyHash:"xh3tXnlHIJr+kd9c+gZdu7mssLgFBcRYqkJtbBf1phU="
                }),
            });
            let historyData = await response.json();
           console.log("GET HISTORY",historyData)
            return historyData;
        } catch(e) {
            console.log("HISTORY ERROR",e)
        }
        },
       async getHistoryDayData (data) {
          
        try {
            let response = await fetch("http://qr.st-ing.com/forday", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    ...data,
                    verifyHash:"xh3tXnlHIJr+kd9c+gZdu7mssLgFBcRYqkJtbBf1phU="
                }),
            });
            let historyDayData = await response.json();
           
            return historyDayData;
        } catch(e) {
            console.log("HISTORY DAY ERROR",e)
        }
        },

        async getPersonData (data) {
            console.log("SEDN DATA",data)
            try {
                let response = await fetch("http://qr.st-ing.com/verify", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        ...data,
                        verifyHash:"xh3tXnlHIJr+kd9c+gZdu7mssLgFBcRYqkJtbBf1phU="
                    }),
                });
                let ProfileData = await response.json();
                console.log("ProfileData",ProfileData)
                return ProfileData;
            } catch (error) {
                console.log("error",error)
            }
        }


}

export default API;