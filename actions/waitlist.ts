"use server";

import {
  EstablishmentEmployees,
  EstablishmentType,
} from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";

export type WaitlistForm = {
  name: string;
  email: string;
  phone: string;
  establishmentName: string;
  establishmentType: EstablishmentType;
  establishmentLocation: string;
  establishmentEmployees: EstablishmentEmployees;
};

export const addToWaitlist = async (data: WaitlistForm) => {
  if (
    !data.email ||
    !data.name ||
    !data.phone ||
    !data.establishmentName ||
    !data.establishmentType ||
    !data.establishmentLocation ||
    !data.establishmentEmployees
  ) {
    return {
      success: false,
      error: "Tous les champs sont obligatoires",
    };
  }

  const waitlist = await prisma.waitlist.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      establishmentName: data.establishmentName,
      establishmentType: data.establishmentType,
      establishmentLocation: data.establishmentLocation,
      establishmentEmployees: data.establishmentEmployees,
    },
  });
  return {
    success: true,
    waitlist,
  };
};
