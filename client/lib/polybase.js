import { Polybase } from "@polybase/client";

const db = new Polybase({
	defaultNamespace: "customers",
});

const createCollection = async () => {
	await db.applySchema(
		`
        @public
        collection Customer {
            id: string;
            cust_name: string;
            cust_dob: string;
            cust_gender: string;
            cust_address: string;
            cust_contactNo: string;
            cust_email: string;
            acc_name: string;
            acc_number: string;
            acc_branch: string;
            acc_bank: string;

            constructor(id: string, cust_name: string, cust_dob: string, cust_gender: string, cust_address: string, cust_contactNo: string, cust_email: string, acc_name: string, acc_number: string, acc_branch: string, acc_bank:string) {
                this.id = id;
                this.cust_name = cust_name;
                this.cust_dob = cust_dob;
                this.cust_gender = cust_gender;
                this.cust_address = cust_address;
                this.cust_contactNo = cust_contactNo;
                this.cust_email = cust_email;
                this.acc_name = acc_name;
                this.acc_number = acc_number;
                this.acc_branch = acc_branch;
                this.acc_bank = acc_bank;
            }
        }
    `,
		"customers"
	);
};

createCollection()
	.then(() => console.log("Collection Created"))
	.catch((err) => console.log(err));

export { db, createCollection };
