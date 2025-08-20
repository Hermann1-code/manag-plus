"use server";

import { EstablishmentEmployees, EstablishmentType } from "@prisma/client";
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

  const verif = await prisma.waitlist.findUnique({
    where: {
      email: data.email,
    },
  });
  if (verif?.phone === data.phone) {
    return {
      success: false,
      error: "Vous avez deja inscrit votre numero de telephone",
    };
  }
  if (verif) {
    return {
      success: false,
      error: "Vous avez deja inscrit votre email",
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
