import React, { useContext } from "react";

import * as BooksHooks from '../../../hooks'

const SubsectionCurrentPage = (props) => {
  const pageHook = useContext(BooksHooks.Context.Page);
  return (
    <p className="all-caps alt-text current-page" data-testid="subtitle">
      {pageHook.subtitle}
      <style jsx="true" />
    </p>
  );
};

export default SubsectionCurrentPage;
