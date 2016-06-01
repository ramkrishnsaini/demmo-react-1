var NewComponent = React.createClass({
  render: function() {
    return (

      <div>
        <span>
          ©2016 Accredo Heal Group, Inc.| An Express Scripts Company. All Rights Reserverd.
        </span>
        <br />
        <br />
        <span>Please note that the information contained on this website is accurate as of the date received and processed by our pharmacy. records and information contained in the site should not be used as official documentation for medical records, It is intended for information use only. If you have any concerns or question regarding the information presented here, please contact us at 1-877-ACCREDO(222-7336)(9am to 8pm EST Monday through Friday)</span>
      </div>
    );
  }
});

ReactDOM.render(
  <NewComponent />,
  document.getElementById('footer')
);