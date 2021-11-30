import { motion } from "framer-motion";
import { Card } from "../Card";
import { Collapse } from "../Collapse";

import styles from "./faq.module.scss";

export const Faq = ({ className }) => {
  let faqClassName = styles.faq;

  if (className) {
    faqClassName = `${faqClassName} ${className}`;
  }

  return (
    <motion.div className={faqClassName}>
      <Card title="FAQs">
        <Collapse title="What is Cosmetic Tattooing?">
          Cosmetic Tattooing, also called Semi-Permanent Make-up or
          Micro-pigmentation, is the process of depositing coloured pigment
          beneath the surface of the skin by means of a sterile, disposable
          needle to enhance the natural features of the face.
        </Collapse>

        <Collapse title="Does Cosmetic Tattooing Hurt?">
          A topical anesthetic cream and gel are used for numbing the treatment
          area before and during your procedure. Pain tolerance levels vary from
          person to person, and every effort is made to ensure you remain
          comfortable for the entirety of the procedure.
        </Collapse>

        <Collapse title="What factors will effect my cosmetic tattoo?">
          Sun exposure: The sun fades the pigment faster and sun block is
          suggested to prolong the treated area. The regeneration of skin cells:
          The longer the regeneration takes, the longer the pigment holds. The
          speed at which the skin absorbs the pigment: The slower the
          absorption, the longer the pigment will hold. The choice of color:
          Some colors fade quicker than others, e.g. a blonde color will fade
          quicker than a dark brown color.
        </Collapse>
        <Collapse title="What should I do before my appointment?Here Goes Your Question?">
          General Rules for all cosmetic tattoo treatments Absolutely NO sun or
          tanning prior to and after the procedure for 4-6 weeks. DO NOT take
          Aspirin, vitamin E or ibuprofen,48-73 hrs prior to your
          appointment…unless medically necessary (please inform the technician).
          Please come to your appointment with a clean make-up free face.For
          eyebrows: If you have an ideal shape and colour in mind, bring a few
          reference photos with you to your appointment. If you regularly get
          your eyebrows waxed, threaded or tinted, Do Not have any of these
          treatments 72hrs prior to your appointment. If there are any stray
          hairs that fall outside of our final shape, the technician will remove
          them. Please show up to your appointment day with a clean make-up free
          face. If you plan to go on a vacation, it is recommended to plan your
          trip a minimum of 14 days after the procedure. If you receive botox,
          please inform your technician and allow a month in between brow
          treatment and botox treatment.For eyes: For eyes: A clean makeup free
          face and a few reference photos. If you wear contact lenses, please do
          not wear them the day of your appointment. Please bring your glasses.
          If you receive eyelash extension treatments, please have these removes
          before your appointment and it is recommended that you do not have
          them reapplied untill 4-6 weeks after your final second session
          procedure. If you show up to your eyeliner appointment with eyelash
          extensions on, this will automatically cancel your procedure
          appointment, resulting in having to reschedule and a $50 rescheduling
          fee will be applied to you total procedure cost. For lips: If you
          carry the cold sore virus please advise the technician. She will
          inform you of the pre-appointment care needed. Also, please inform the
          technician of any lip filler procedures you currently have or plan on
          getting.
        </Collapse>

        <Collapse title="What are the pigments made of?">
          . The pigments used in Cosmetic Tattooing come in a variety of colours
          specially formulated with ingredients that are safe for the skin.
          Because colour is implanted just underneath the dermal layer of the
          skin, the resulting shade is soft and muted, unlike regular cosmetic
          make-up that sits on the surface of the skin.
        </Collapse>

        <Collapse title="How long do cosmetic tattooos last?">
          The treatment is considered semi-permanent and it will fade over time,
          resulting in a touch-up every 1-3 years. Frequency of touch-ups
          depends on a number of factors including: the pigment colour used
          (lighter colours fade faster), lifestyle (sun exposure), iron
          deficiency (your body absorbs iron-oxide as a supplement), and if any
          chemical peels come into contact with treated areas. Please note that
          final results cannot be guaranteed as each unique skin type will hold
          pigments differently and break down at different rates.
        </Collapse>

        <Collapse title="How will I look immediately after? What is the healing process?">
          Your semi-permanent makeup will appear darker and bigger than expected
          for the first few days. This will gradually lighten during the
          complete healing process. Please refer to the Aftercare page.
        </Collapse>

        <Collapse title="How many treatments are required?">
          New cosmetic tattoo procedures require two sessions. Two treatments
          are needed, at least 8 weeks apart. With most procedures, the colour
          looks dramatically lighter after the first week and some clients
          prefer this, while others opt for a bolder look. On the second
          session, we will assess the pigment colour and make adjustments as
          necessary. Everyone heals differently and at different rates. If your
          cosmetic tattoo does not heal perfectly the first time, do not worry!
          We can always go darker and add more density at your next appointment.
          Previously tattooed eyebrows will be treated as a brow correction or
          brow refresher, a consultation is always required and cost will be
          determined on how much work is involved.
        </Collapse>
      </Card>
    </motion.div>
  );
}

Faq.defaultProps = {};

export default Faq;
