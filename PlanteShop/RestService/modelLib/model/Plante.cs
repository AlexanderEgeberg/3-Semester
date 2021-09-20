using System;
using System.Collections.Generic;
using System.Text;

namespace modelLib.model
{
    public class Plante
    {
        public int PlanteId { get; set; }
        public string PlanteType { get; set; }
        public string PlanteNavn { get; set; }
        public int MaksHoejde { get; set; }
        public int Price { get; set; }

        public Plante(int planteId, string planteType, string planteNavn, int maksHoejde, int price)
        {
            PlanteId = planteId;
            PlanteType = planteType;
            PlanteNavn = planteNavn;
            MaksHoejde = maksHoejde;
            Price = price;
        }

        public Plante()
        {
            
        }

        public override string ToString()
        {
            return $"id: {PlanteId} - type: {PlanteType} - navn: {PlanteNavn} - makshøjde: {MaksHoejde} - Pris: {Price} kr ";

        }
    }
}
