// Mock user database
const users = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123', // Plaintext password for simplicity
    },
    {
      id: 2,
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'password456',
    },
  ];

  // Function to simulate token generation
  function generateToken(user: any) {
    // In real-world applications, you'd use something like JWT
    return `dummy-token-${user.id}-${new Date().getTime()}`;
  }

  // Mock login function
  export async function loginUser(email: string, password: string) {
    console.log(email,password);

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      const token = generateToken(user);
      return { success: true, token, user: { id: user.id, username: user.username, email: user.email } };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  }

  // Mock token verification
  export async function verifyToken(token: string) {
    // In a real application, you would decode and verify the token
    return token.startsWith('dummy-token-');
  }
