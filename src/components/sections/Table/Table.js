import React, { useState } from "react";
import { ContentContainer, Section, Typography } from "../../shared";

import styles from "./Table.module.scss";

export const Table = ({ title, settings, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const table = tabs[0].table;
  return (
    <Section {...settings.section}>
      <ContentContainer className={styles.container}>
        <Typography as={"h2"} className={styles.title} {...settings.title}>
          {title}
        </Typography>
        <div className={styles["tabs-wrapper"]}>
          {tabs.map(({ title }, index) => (
            <div key={index} onClick={setActiveTab.bind(null, index)}>
              {title}
            </div>
          ))}
        </div>

        {tabs.map(
          ({ table: { head, body } }, index) =>
            activeTab === index && (
              <table key={index}>
                <thead>
                  <tr>
                    {head.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((item, index) => (
                    <tr key={index}>
                      {item.map((item, index) => (
                        <td key={index}>{item}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )
        )}
      </ContentContainer>
    </Section>
  );
};
