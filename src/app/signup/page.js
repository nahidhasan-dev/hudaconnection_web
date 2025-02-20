import { account } from "../appwrite";
export default function Signup() {
    return (
        <div>
            Enter
        </div>
    );
}

const handleSignUp = async (email, password, name) => {
    try {
        await account.create("unique()", email, password, name);
        await account.createEmailSession(email, password);
    } catch (error) {
        console.error(error);
    }
};

