class Client {
    constructor(emailAddress, fullName, subject, description, docs) {
        this.emailAddress = emailAddress;
        this.fullName = fullName;
        this.subject = subject;
        this.description = description;
        this.docs = docs;
    }

    getClientInfo() {
        return {
                "emailAddress": this.emailAddress,
                "fullName": this.fullName,
                "subject": this.subject,
                "description": this.description,
                "docs": this.docs
            
        }
    }
}
module.exports.Client = Client;