const API = {

    async getPersonName(id) {

        let response = await fetch("http://qr.st-ing.com/findname", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                uid: id
            }),
        });

        let personName = await response.json();
        return personName.employeeName;
    },
    //    async getPersonData (data) {
    //     let response = await fetch("http://qr.st-ing.com/verify", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify({
    //             ...data
    //         }),
    //     });

    //     let resultData = await response.json();
    //     console.log("result", resultData);
    //     return resultData;
    //     },

        async getPersonData (data) {
            console.log("send data on entry App")
            try {
                let response = await fetch("http://qr.st-ing.com/verify", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        ...data
                    }),
                });
                let ProfileData = await response.json();
                console.log("Profile data",ProfileData);
                return ProfileData;
            } catch (error) {
                console.log("error")
            }
        }


}

export default API;