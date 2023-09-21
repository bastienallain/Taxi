"use client";
import React, { useState, useEffect } from "react";
import { Button, Input, Modal, Select, SelectItem } from "@nextui-org/react";
import Calcul from "../distance/calcul";
interface HomeHeroProps {
  onFormSubmit: (formState: {
    depart: string;
    arrivee: string;
    typeVehicule: string;
    date: string;
    heure: string;
  }) => void;
}
export const HomeHero = ({ onFormSubmit }: HomeHeroProps) => {
  const [formState, setFormState] = useState({
    depart: "",
    arrivee: "",
    typeVehicule: "",
    date: "",
    heure: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modal
  const [tarif, setTarif] = useState<number | null>(null); // État pour le tarif

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const vehicleTypes = [
    { value: "van", label: "Van" },
    { value: "eco", label: "Éco" },
    { value: "berline", label: "Berline" },
  ];
  const handleFormSubmit = (formState: {
    depart: string;
    arrivee: string;
    typeVehicule: string;
    date: string;
    heure: string;
  }) => {
    onFormSubmit(formState);
    const tarifCalcule = calculateFare(formState);
    setTarif(tarifCalcule);
    setIsModalOpen(true);
  };

  return (
    <section className="pt-24 bg-white dark:bg-black">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-gray-100 md:text-6xl md:tracking-tight">
            <span>Voyagez</span>{" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              avec élégance
            </span>{" "}
            <span>dans nos taxis premium</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 dark:text-gray-200 md:text-xl lg:px-24">
            Découvrez un service de taxi haut de gamme, confortable et fiable.
            Réservez dès maintenant et laissez-nous transformer vos trajets en
            une expérience exceptionnelle.
          </p>
        </div>
        <div className="w-full flex-row mx-auto mt-20 text-center md:w-10/12">
          <div className="relative z-0 mt-8">
            <div className="relative overflow-hidden flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/5">
                <Input
                  label="Ville de départ"
                  name="depart"
                  placeholder="ville de départ"
                  value={formState.depart}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/5">
                <Input
                  label="Ville d'arrivée"
                  name="arrivee"
                  placeholder="ville d'arrivée"
                  value={formState.arrivee}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/5">
                <Select
                  label="Type de véhicule"
                  name="typeVehicule"
                  placeholder="type de véhicule"
                  value={formState.typeVehicule}
                  onChange={handleChange}
                  className="max-w-xs"
                >
                  {vehicleTypes.map((vehicle) => (
                    <SelectItem key={vehicle.value} value={vehicle.value}>
                      {vehicle.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full md:w-1/5">
                <Input
                  label="Date"
                  name="date"
                  type="date"
                  value={formState.date}
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="w-full md:w-1/5">
                <Input
                  label="Heure"
                  name="heure"
                  type="time"
                  value={formState.heure}
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="w-full md:w-1/5">
                <Button
                  onClick={() => handleFormSubmit(formState)}
                  color="primary"
                >
                  Calculer
                </Button>
              </div>
              <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Calcul formState={formState} />
                {tarif !== null && (
                  <div>
                    Le tarif est : {tarif.toFixed(2)} €. Êtes-vous prêt à
                    réserver ?
                  </div>
                )}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
function calculateFare(formState: {
  depart: string;
  arrivee: string;
  typeVehicule: string;
  date: string;
  heure: string;
}) {
  throw new Error("Function not implemented.");
}
