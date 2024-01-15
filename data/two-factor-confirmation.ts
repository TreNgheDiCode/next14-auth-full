import { db } from "@/lib/db";

export const getTwoFactorConfirmationById = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findFirst({
      where: { userId },
    });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};
