import React, { useMemo, useState } from "react";
import styles from "./Home.module.css";
import search from "../../../Assets/search.svg";
import file from "../../../Assets/file.svg";
import bell from "../../../Assets/bell.svg";
import { ButtonComponent } from "../../../Components/UI/Button";

type DocStatus = "Pendiente" | "En Revisión" | "Aprobado";

type Doc = {
  id: string;
  title: string;
  status: DocStatus;
  lastActivity: string;
  tags: string[];
  author: string;
  thumbnail?: string | null;
};

const SAMPLE_DOCS: Doc[] = [
  {
    id: "1",
    title: "Acta de Reunión - 2025-10-20",
    status: "Aprobado",
    lastActivity: "2025-10-27T14:33:00",
    tags: ["acta", "reunion"],
    author: "María Pérez",
    thumbnail: null,
  },
  {
    id: "2",
    title: "Factura Proveedor X",
    status: "En Revisión",
    lastActivity: "2025-10-28T09:12:00",
    tags: ["finanzas", "proveedor"],
    author: "Juan Gómez",
    thumbnail: null,
  },
  {
    id: "3",
    title: "Escaneo Identidad - Cliente A",
    status: "Pendiente",
    lastActivity: "2025-10-25T16:00:00",
    tags: ["identidad"],
    author: "Sofía Ruiz",
    thumbnail: null,
  },
  {
    id: "4",
    title: "Propuesta Proyecto",
    status: "En Revisión",
    lastActivity: "2025-10-26T11:00:00",
    tags: ["propuesta", "cliente"],
    author: "Carlos Díaz",
    thumbnail: null,
  },
  {
    id: "5",
    title: "Contrato Firmado",
    status: "Aprobado",
    lastActivity: "2025-10-24T12:45:00",
    tags: ["contrato"],
    author: "Ana López",
    thumbnail: null,
  },
];

const statusColor = (s: DocStatus) => {
  switch (s) {
    case "Pendiente":
      return styles.statusPending;
    case "En Revisión":
      return styles.statusReview;
    case "Aprobado":
      return styles.statusApproved;
  }
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"Todos" | DocStatus>(
    "Todos"
  );

  const filtered = useMemo(() => {
    let list = SAMPLE_DOCS;
    if (statusFilter !== "Todos") {
      list = list.filter((d) => d.status === statusFilter);
    }
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.tags.join(" ").toLowerCase().includes(q) ||
        d.author.toLowerCase().includes(q)
    );
  }, [query, statusFilter]);

  function toggleStatusFilter(s: "Todos" | DocStatus) {
    setStatusFilter((prev) => (prev === s ? "Todos" : s));
  }

  function openDocument(id: string) {
    console.log("Abrir documento", id);
    window.alert(`Abrir documento ${id} (a implementar navegación)`);
  }

  return (
    <div className={styles.page}>
      <aside className={styles.leftSidebar}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>AD</div>
          <div className={styles.logoText}>ArkaDocs</div>
        </div>

        <nav className={styles.nav}>
          <button className={`${styles.navItem} ${styles.navActive}`}>
            Dashboard
          </button>
          <button className={styles.navItem}>Perfil</button>
          <button className={styles.navItem}>Ajustes</button>
        </nav>

        <div className={styles.sidebarSpacer} />

        <div className={styles.sidebarFooter}>
          <small className={styles.sidebarFooterText}>© ArkaDocs</small>
        </div>
      </aside>

      <header className={styles.header}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon} aria-hidden>
            <img src={search} alt="" height={15} />
          </span>
          <input
            aria-label="Búsqueda global"
            className={styles.search}
            placeholder="Buscar documentos, autores, etiquetas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className={styles.headerRight}>
          <ButtonComponent label="Subir Documento" width={170} />

          <button className={styles.iconBtn} title="Notificaciones">
            <img src={bell} alt="" />
          </button>
          <button className={styles.profileBtn} aria-label="Perfil">
            MP
          </button>
        </div>
      </header>

      <main className={styles.contentArea}>
        <section className={styles.widgets}>
          <button
            className={`${styles.widget} ${styles.widgetPending} ${
              statusFilter === "Pendiente" ? styles.widgetActive : ""
            }`}
            onClick={() => toggleStatusFilter("Pendiente")}
            aria-pressed={statusFilter === "Pendiente"}
          >
            <div className={styles.widgetTitle}>Pendientes</div>
            <div className={styles.widgetValue}>
              {SAMPLE_DOCS.filter((d) => d.status === "Pendiente").length}
            </div>
          </button>

          <button
            className={`${styles.widget} ${styles.widgetReview} ${
              statusFilter === "En Revisión" ? styles.widgetActive : ""
            }`}
            onClick={() => toggleStatusFilter("En Revisión")}
            aria-pressed={statusFilter === "En Revisión"}
          >
            <div className={styles.widgetTitle}>En Revisión</div>
            <div className={styles.widgetValue}>
              {SAMPLE_DOCS.filter((d) => d.status === "En Revisión").length}
            </div>
          </button>

          <button
            className={`${styles.widget} ${styles.widgetApproved} ${
              statusFilter === "Aprobado" ? styles.widgetActive : ""
            }`}
            onClick={() => toggleStatusFilter("Aprobado")}
            aria-pressed={statusFilter === "Aprobado"}
          >
            <div className={styles.widgetTitle}>Aprobados</div>
            <div className={styles.widgetValue}>
              {SAMPLE_DOCS.filter((d) => d.status === "Aprobado").length}
            </div>
          </button>
        </section>

        <section className={styles.tableWrap}>
          <div className={styles.tableHeader}>
            <h3>Lista de Documentos</h3>
            <div className={styles.resultsInfo}>
              {filtered.length} resultados
            </div>
          </div>

          <table className={styles.docTable}>
            <thead>
              <tr>
                <th>Preview</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Autor</th>
                <th>Última modificación</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((doc) => (
                <tr
                  key={doc.id}
                  className={styles.docRow}
                  onClick={() => openDocument(doc.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") openDocument(doc.id);
                  }}
                >
                  <td className={styles.tdThumb}>
                    <div className={styles.smallThumb}>
                      {
                        <div className={styles.iconDoc}>
                          <img src={file} alt="doc" />
                        </div>
                      }
                    </div>
                  </td>
                  <td className={styles.tdTitle}>{doc.title}</td>
                  <td>
                    <span
                      className={`${styles.statusPill} ${statusColor(
                        doc.status
                      )}`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className={styles.tdAuthor}>{doc.author}</td>
                  <td className={styles.tdDate}>
                    {new Date(doc.lastActivity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
