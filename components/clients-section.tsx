"use client";

import { motion } from "framer-motion";
import { useTranslation } from "./language-provider";

export function ClientsSection() {
  const { t } = useTranslation();

  const clients = [
    { name: "Ministry of Health Ethiopia", logo: "https://lemon.et/wp-content/uploads/2023/10/MOH.png", link: "https://moh.gov.et" },
    { name: "Ministry of Education Ethiopia", logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Ministry_of_Education_%28Ethiopia%29.png", link: "https://moe.gov.et" },
    { name: "Ministry of Justice Ethiopia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ministry_of_Justice_Ethiopia.png/640px-Ministry_of_Justice_Ethiopia.png", link: "https://www.moj.gov.et/" },
    { name: "Ministry of Financial institution Ethiopia", logo: "https://www.mofed.gov.et/static/assets/img/mof.png", link: "https://www.mofed.gov.et/" },
    { name: "Yetebaberut Food Complex", logo: "https://yetebaberutfoodcomplex.com/assets/images/logo/logo.png", link: "https://www.yetebaberutfoodcomplex.com/" },
    { name: "Ministry of Mines", logo: "http://www.mom.gov.et/wp-content/uploads/2021/10/momlogo.jpg", link: "http://www.mom.gov.et" },
    { name: "Enat Bank ", logo: "https://www.enatbanksc.com//wp-content/uploads/2018/10/logo.png", link: "https://www.enatbanksc.com" },
    { name: "FDRE Ministry of Transport and Logistics", logo: "https://www.motl.gov.et/sites/default/files/ministry/logo.jpg", link: "https://www.motl.gov.et" },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("Our Clients")}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("Trusted by leading organizations across industries")}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-card rounded-lg hover:shadow-md transition-shadow grayscale hover:grayscale-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-h-16 transition-all"
              />
              <span className="text-sm text-center mt-2">{client.name}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}