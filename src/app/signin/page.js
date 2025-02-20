import { account } from "../appwrite";

const handleSignIn = async (email, password) => {
    try {
        await account.createEmailSession(email, password);
    } catch (error) {
        console.error(error);
    }
};

export default function Signin() {
    return (
        <div>
            Enter
        </div>
    );
}

