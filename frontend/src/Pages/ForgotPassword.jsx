import { useState } from 'react';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [resetToken, setResetToken] = useState('');

    const handleSubmitEmail = (event) => {
        event.preventDefault();
        // Add logic to send a reset password email to the provided email address
        // For demonstration purposes, we'll just log a message and update the state
        console.log('Reset password email sent to:', email);
        setIsEmailSent(true);
        // In a real application, you would typically generate and send a unique reset token in the email
        setResetToken('sample-reset-token');
    };

    const handleSubmitPasswordReset = (event) => {
        event.preventDefault();
        // Add logic to update the password with the provided reset token
        console.log('Password reset with token:', resetToken, 'New Password:', newPassword);
        // You may want to redirect the user to the login page or another appropriate page
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <form
                onSubmit={!isEmailSent ? handleSubmitEmail : handleSubmitPasswordReset}
                className="p-6 bg-zinc-900 rounded shadow-md w-1/2"
            >
                <h2 className="text-lg font-semibold mb-4 text-white">
                    {!isEmailSent ? 'Forgot Password' : 'Reset Password'}
                </h2>

                {!isEmailSent ? (
                    <>
                        <p className="text-white mb-4">
                            Enter your email address below, and we will send you a link to reset your password.
                        </p>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                        </div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-3 py-2 mb-4 border border-gray-300 rounded w-full"
                        />
                        <button type="submit" className="px-4 py-2 text-white bg-emerald-600 rounded hover:bg-green">
                            Send Reset Link
                        </button>
                    </>
                ) : (
                    <>
                        <p className="text-white mb-4">
                            Enter a new password below to complete the password reset process.
                        </p>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="newPassword" className="text-sm font-medium text-white">New Password</label>
                        </div>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="px-3 py-2 mb-4 border border-gray-300 rounded w-full"
                        />
                        <button type="submit" className="px-4 py-2 text-white bg-emerald-600 rounded hover:bg-green">
                            Reset Password
                        </button>
                    </>
                )}

            </form>
        </div>
    );
}

export default ForgotPasswordPage;