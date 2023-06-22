
const Section = (props) => {
    return (
      <section id={props.id}  className={`${className}`} >
          <div className={layout.container}>
            <div className="pb-10">
              <h2 className={layout.sectionTitle}>{props.title}</h2>
              <p className={layout.sectionSubtitle}>{props.subtitle}</p>
            </div>
            {props.children}
          </div>
        </section>
    );
  };

export default Section