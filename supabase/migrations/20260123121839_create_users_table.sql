/*
  # Create users table for simple password authentication

  1. New Tables
    - `users`
      - `id` (uuid, primary key) - Unique identifier for each user
      - `username` (text, unique) - Username for login
      - `password_hash` (text) - Hashed password
      - `created_at` (timestamptz) - Account creation timestamp
      
  2. Security
    - Enable RLS on `users` table
    - Add policy for authenticated users to read their own data
    
  3. Notes
    - This is a simple password-based authentication system
    - Passwords will be managed through the application
    - Users will be manually created by the site owner
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Service role can manage users"
  ON users
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);