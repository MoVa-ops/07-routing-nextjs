import Link from "next/link";
import css from "./SidebarNotes.module.css";

const tags = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

interface SidebarNotesProps {
  currentTag: string;
}

export default function SidebarNotes({ currentTag }: SidebarNotesProps) {
  return (
    <ul className={css.menuList}>
      {tags.map((tag) => {
        const hrefTag = tag === "All" ? "all" : tag;

        return (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${hrefTag}`}
              className={`${css.menuLink} ${
                currentTag === hrefTag || currentTag === tag ? css.active : ""
              }`}
            >
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}