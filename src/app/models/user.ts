export class User{
    constructor(
        public allowCorrespondence: string,
        public companyName: string,
        public email: string,
        public firebaseToken: string,
        public imei: string,
        public lastName: string,
        public name: string,
        public otp: string,
        public phone: string,
        public role: string,
        public socialId: string,
        public socialOrigin: string,
        public typeCompany: string,
        public typeUser: string,
    ){}
}