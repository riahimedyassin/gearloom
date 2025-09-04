// Simple test script to verify user creation works
// Run this with: node test-user-creation.js

const testUserData = {
  firstname: "John",
  lastname: "Doe", 
  email: "john.doe@example.com",
  password: "TestPassword123",
  confirmPassword: "TestPassword123"
};

async function testUserCreation() {
  try {
    console.log('Testing user creation...');
    console.log('Test data:', JSON.stringify({ ...testUserData, password: '***', confirmPassword: '***' }, null, 2));
    
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testUserData)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ User created successfully!');
      console.log('Response:', JSON.stringify(result, null, 2));
    } else {
      console.log('❌ User creation failed');
      console.log('Error:', result);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

async function testUsersFetch() {
  try {
    console.log('Testing users fetch...');
    
    const response = await fetch('http://localhost:3000/api/users');
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Users fetched successfully!');
      console.log(`Found ${result.data?.length || 0} users`);
    } else {
      console.log('❌ Users fetch failed');
      console.log('Error:', result);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

// For now, just log the test data since we can't actually run fetch without a server
console.log('User API test data:');
console.log('POST /api/users');
console.log(JSON.stringify({ ...testUserData, password: '***', confirmPassword: '***' }, null, 2));
console.log('\nTo test the API, start your Next.js server and run:');
console.log('# Create user:');
console.log('curl -X POST http://localhost:3000/api/users \\');
console.log('  -H "Content-Type: application/json" \\');
console.log('  -d \'' + JSON.stringify(testUserData) + '\'');
console.log('\n# Fetch users:');
console.log('curl http://localhost:3000/api/users');
