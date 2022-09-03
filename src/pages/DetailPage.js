import React, { useEffect } from "react";
import Page from "../UI/Page";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailData } from "../store/detail-show/detail-show-action";

import Backdrop from "../components/DetailView/Backdrop";
import Spinner from "../UI/Spinner";
import Detail from "../components/DetailView/Detail";

const DetailPage = () => {
  const { media, id } = useParams();
  const { data, loading, error } = useSelector(state => state.detailShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailData(media, id));
  }, [dispatch, media, id]);

  if (loading) return <Spinner />;

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <Page>
      <Backdrop backdropURL={data.backdropUrl} />

      <Detail detail={data} />
    </Page>
  );
};

export default DetailPage;
