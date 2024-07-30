import { getSession } from '@auth0/nextjs-auth0';

export default async function ProfileServer() {
  const session = await getSession();

  if (session && session.user) {
    const { user } = session;
    return (
      <div>
        <img
          src={user.picture}
          alt={user.name}
        />
        <p>{user.email}</p>
        <p>Given Name: {user.given_name}</p>
        <p>Family Name: {user.family_name}</p>
        <p>Nickname: {user.nickname}</p>
        <p>Email Verified: {user.email_verified ? 'Yes' : 'No'}</p>
        <p>Last Updated: {new Date(user.updated_at).toLocaleString()}</p>
        <p>Subject: {user.sub}</p>
        <p>Session ID: {user.sid}</p>
      </div>
    );
  } else {
    return <div>Not signed in</div>;
  }
}
