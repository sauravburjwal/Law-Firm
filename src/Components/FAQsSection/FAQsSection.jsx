import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '../ExpandMoreIcon/ExpandMoreIcon';

import './FAQsSection.css';

const FAQsSection = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderExpandIcon = (panel) => {
    return expanded === panel ? null : <ExpandMoreIcon />;
  };
  return (
    <div className="faq-section">
      <div className="faq-heading-container">
        <h2>FAQ</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do
          amet sint.
        </p>
      </div>
      <div className="faq-accordion-container">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className="accordion"
          style={{ borderTop: 'none' }}
        >
          <AccordionSummary
            expandIcon={renderExpandIcon('panel1')}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordion-summary"
          >
            <p className="accordion-summary-text">
              Do I need a personal injury report?
            </p>
          </AccordionSummary>

          <AccordionDetails>
            <p className="accordion-details-text">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
              do amet sint. Velit officia consequatduis <br /> enim velit mollit
              Exer. Amet minim mollit non deserunt <br /> ullamco est sit aliqua
              dolor do amet sint. Velit officia <br /> consequatduis enim velit
              mollit Exer.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={renderExpandIcon('panel2')}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className="accordion-summary"
          >
            <p className="accordion-summary-text">How much is my case worth?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details-text">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
              do amet sint. Velit officia consequatduis <br /> enim velit mollit
              Exer. Amet minim mollit non deserunt <br /> ullamco est sit aliqua
              dolor do amet sint. Velit officia <br /> consequatduis enim velit
              mollit Exer.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={renderExpandIcon('panel3')}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className="accordion-summary"
          >
            <p className="accordion-summary-text">
              What should I do right after car accidect
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details-text">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
              do amet sint. Velit officia consequatduis <br /> enim velit mollit
              Exer. Amet minim mollit non deserunt <br /> ullamco est sit aliqua
              dolor do amet sint. Velit officia <br /> consequatduis enim velit
              mollit Exer.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={renderExpandIcon('panel4')}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className="accordion-summary"
          >
            <p className="accordion-summary-text">How much is my case worth?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details-text">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
              do amet sint. Velit officia consequatduis <br /> enim velit mollit
              Exer. Amet minim mollit non deserunt <br /> ullamco est sit aliqua
              dolor do amet sint. Velit officia <br /> consequatduis enim velit
              mollit Exer.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsSection;
