// utils/user.ts
export function getUser(): { userId: number; username: string | null } {
  const storedUserId = localStorage.getItem("userId");
  const storedUsername = localStorage.getItem("username");

  return {
    userId: storedUserId ? Number(storedUserId) : 0,
    username: storedUsername ?? null,
  };
}
