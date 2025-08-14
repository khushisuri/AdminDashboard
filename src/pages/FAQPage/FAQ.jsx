import {
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Header from "../../components/Header";
import Layout from "../../layout/Layout";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:900px)")
  return (
    <Layout>
      <Box width={isSmallScreen?"90%":"60%"} margin="auto">
        <Header title="FAQs" desc="FAQ Page List"></Header>

        <Box sx={{ overflowY: "scroll", height: "75vh" }}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              sx={{
                backgroundColor: colors.gray[900],
                color: colors.greenAccent[600],
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Question 1
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.gray[800] }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              sx={{
                backgroundColor: colors.gray[900],
                color: colors.greenAccent[600],
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Question 2
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.gray[800] }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              sx={{
                backgroundColor: colors.gray[900],
                color: colors.greenAccent[600],
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Question 3
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.gray[800] }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              sx={{
                backgroundColor: colors.gray[900],
                color: colors.greenAccent[600],
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Question 4
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.gray[800] }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              sx={{
                backgroundColor: colors.gray[900],
                color: colors.greenAccent[600],
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Question 5
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.gray[800] }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              sx={{
                backgroundColor: colors.gray[900],
                color: colors.greenAccent[600],
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Question 6
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.gray[800] }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Layout>
  );
};

export default FAQ;
