// import { Helmet } from "react-helmet-async";

// const PageTitle = ({ title }) => {
//   return (
//     <Helmet>
//       <title>
//         {title} | Yum Reactjs - Multipurpose Food Tailwind CSS Template
//       </title>
//     </Helmet>
//   );
// };

// export default PageTitle;

// if we remove react helmet then it is show casing check it out

// import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <>
      <title>
        {title} | Yum Reactjs - Multipurpose Food Tailwind CSS Template
      </title>
    </>
  );
};

export default PageTitle;
