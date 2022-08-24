import React, { useEffect } from "react";
import Page from "../UI/Page";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailData } from "../store/detail-show/detail-show-thunk";
import Spinner from "../UI/Spinner";

const DetailPage = () => {
  const { media, id } = useParams();
  const { data, loading, error } = useSelector(state => state.detailShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailData(media, id));
  }, [dispatch, media, id]);

  if (loading) return <Spinner />;

  if (error) return <p className="error-msg">{error}</p>;

  if (!loading) console.log(data);

  return (
    <Page>
      <p>Detail Page</p>
    </Page>
  );
};

export default DetailPage;
