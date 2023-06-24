import { layout } from "../style";

const Section = (Component, idName, classNames, subtitle, title) =>
  function HOC() {
    return (
      <section className={`${layout.section} ${classNames}`} id={idName}>
        <div className={layout.container}>
          <span className={`text-accent ${layout.sectionSubtitle}`}>{subtitle} </span>
          <h2 className={`text-emerald-700 dark:text-emerald-300 ${layout.sectionTitle}`}>
            {title}
            <span className="text-accent">.</span>
          </h2>
          <Component />
        </div>
      </section>
    );
  };

export default Section;
