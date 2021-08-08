import moment from "moment";
import React from "react";

const CommentCard = (props) => {
  return (
    <div>
      <div class="be-comment">
        <div class="be-img-comment">
          <a>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHJlcXVpcmVkRXh0ZW5zaW9ucz0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48L2ZvcmVpZ25PYmplY3Q+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48Zz48cGF0aCBkPSJNNTAsOTcuNUMyMy44LDk3LjUsMi41LDc2LjIsMi41LDUwUzIzLjgsMi41LDUwLDIuNVM5Ny41LDIzLjgsOTcuNSw1MFM3Ni4yLDk3LjUsNTAsOTcuNXogTTUwLDcuNSAgICAgQzI2LjYsNy41LDcuNSwyNi42LDcuNSw1MFMyNi42LDkyLjUsNTAsOTIuNVM5Mi41LDczLjQsOTIuNSw1MFM3My40LDcuNSw1MCw3LjV6Ij48L3BhdGg+PC9nPjxwYXRoIGQ9Ik01MCw0OS43YzcuNSwwLDEzLjYtNi4xLDEzLjYtMTMuNlM1Ny41LDIyLjQsNTAsMjIuNHMtMTMuNiw2LjEtMTMuNiwxMy42UzQyLjUsNDkuNyw1MCw0OS43Ij48L3BhdGg+PHBhdGggZD0iTTc2LjUsNzIuOFY2Mi4zYzAtNy45LTYuNC05LjgtMTQuMi05LjhIMzcuOGMtNy44LDAtMTQuMiwyLTE0LjIsOS44djEwLjZINzYuNXoiPjwvcGF0aD48L2c+PC9zd2l0Y2g+PC9zdmc+"
              alt=""
              class="be-ava-comment"
            />
          </a>
        </div>
        <div class="be-comment-content">
          <span class="be-comment-name">
            <h6>{props.data.name}</h6>
          </span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            {moment(props.data.created).format("MMMM Do YYYY, HH:mm:s")}
          </span>

          <p class="be-comment-text">{props.data.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
