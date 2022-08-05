import React from "react";

const UserIDPage = (props) => {
  return <div>{props.id}</div>;
};

export default UserIDPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: {
      id: userId,
    },
  };
}
