const fontStyle = {
  display: "font-brand font-semibold text-[36px] md:text-[45px] lg:text-[57px] leading-[44px] md:leading-[52px] lg:leading-[64px] tracking-normal lg:tracking-[-0.25px]",
  heading: "font-brand font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[36px] lg:leading-[40px] tracking-normal",
  title: "font-plain font-medium text-[14px] md:text-[16px] lg:text-[22px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[0.1px] md:tracking-[0.15px] lg:tracking-normal",
  body: "font-plain font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[20px] lg:leading-[24px] tracking-[0.4px] md:tracking-[0.25px] lg:tracking-[0.5px]",
  label: "font-plain font-medium text-[11px] md:text-[12px] lg:text-[14px] leading-[16px] lg:leading-[20px] tracking-[0.5px] lg:tracking-[0.1px]",
 };

export const layout = {
  row: "flex flex-wrap",
  container:  "w-full mx-auto px-3 sm:max-w-xl md:max-w-[45rem] lg:max-w-[62rem] xl:max-w-[72rem]",

  section: 'py-8 px-2',
  sectionTitle: `capitalize ${fontStyle.heading} mb-4`,
  sectionSubtitle: `capitalize ${fontStyle.body}`
};

export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};



export default fontStyle;
