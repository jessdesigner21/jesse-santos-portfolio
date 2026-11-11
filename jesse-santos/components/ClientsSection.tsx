import Image from "next/image";
import Link from "next/link";
import { agency, clients, type Client } from "@/data/clients";

const agencyClients = clients.filter((client) => client.agency);
const otherClients = clients.filter((client) => !client.agency);

export default function ClientsSection({ showLabel = true }: { showLabel?: boolean }) {
  return (
    <section id="clientes-preview" className="paper-surface bg-[#F7F4EB] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1376px]">
        {showLabel && (
          <h2 className="archive-collection-title mb-8">
            <Link href="/clientes">Clientes</Link>
          </h2>
        )}

        <div className="clients-agency">
          <div>
            <p className="editorial-num text-[#655b4c]">Agência onde trabalho</p>
            <h2 className="archive-work-title mt-2">{agency.name}</h2>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              <a href={agency.website} target="_blank" rel="noreferrer" className="marker-underline">Site ↗</a>
              <a href={agency.instagram} target="_blank" rel="noreferrer" className="marker-underline">Instagram ↗</a>
            </div>
          </div>
          <Image src={agency.logo} width={295} height={52} alt="" className="h-auto w-full max-w-[15rem]" />
        </div>

        <ClientList title="Trabalhos pela agência" entries={agencyClients} />
        {!showLabel && <ClientList title="Outras marcas e projetos" entries={otherClients} />}
        {showLabel && (
          <Link href="/clientes" className="marker-underline mt-8 inline-block">
            Ver todas as marcas ↗
          </Link>
        )}
      </div>
    </section>
  );
}

function ClientList({ title, entries }: { title: string; entries: Client[] }) {
  return (
    <div className="mt-9 md:mt-14">
      <h2 className="archive-work-title mb-4">{title}</h2>
      <ul className="clients-list">
        {entries.map((client) => {
          const href = client.workHref ?? (client.projectSlugs[0] ? `/work/${client.projectSlugs[0]}` : undefined);
          const content = (
            <>
              <span className="font-grotesk text-lg font-medium leading-tight md:text-xl">{client.name}</span>
              {client.services.length > 0 && (
                <span className="mt-1 block text-sm text-[#655b4c]">{client.services.join(" · ")}</span>
              )}
            </>
          );

          return (
            <li key={client.name}>
              {href ? (
                <Link href={href} className="clients-entry clients-entry-link">
                  <span>{content}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ) : (
                <div className="clients-entry"><span>{content}</span></div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
