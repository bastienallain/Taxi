import React, { useState, useEffect } from "react";
import { point, distance } from "@turf/turf";

const calculerTarif = (distance, typeVehicule, tarifBase) => {
  // Votre logique de calcul de tarif ici
};

const Calcul = ({ formState }) => {
  const [tarif, setTarif] = useState(null);

  useEffect(() => {
    const fetchDistance = async () => {
      try {
        const responseDepart = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            formState.depart
          )}&format=json`
        );
        const dataDepart = await responseDepart.json();
        const responseArrivee = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            formState.arrivee
          )}&format=json`
        );
        const dataArrivee = await responseArrivee.json();
        const coordsDepart = point([dataDepart[0].lon, dataDepart[0].lat]);
        const coordsArrivee = point([dataArrivee[0].lon, dataArrivee[0].lat]);
        const dist = distance(coordsDepart, coordsArrivee, {
          units: "kilometers",
        });
        const tarif = calculerTarif(dist, formState.typeVehicule, 20); // Remplacez 20 par votre tarif de base approprié
        setTarif(tarif);
      } catch (error) {
        console.error(error);
      }
    };

    if (formState) {
      fetchDistance();
    }
  }, [formState]);

  return (
    <div>
      {tarif !== null ? (
        <div>Le tarif est : {tarif} €</div>
      ) : (
        <div>Veuillez entrer les détails du trajet</div>
      )}
    </div>
  );
};

export default Calcul;
