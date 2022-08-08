import axios from "../axios";

class CustomerService {
    postCustomer = async (data) => {
        
        const promise = new Promise((resolve, reject) => {
            console.log("form data: " + data)
            axios.post('users', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchCustomer = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putCustomer = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('users/'+data+'')
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deleteCustomer = async (id) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('users/'+id+'')
            .then((res) => {
                return resolve(res)
            }) 
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
}
export default new CustomerService();