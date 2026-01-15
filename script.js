function formatNumber(num) {
  return num.toLocaleString("ko-KR");
}

function search() {
  const url = document.getElementById("instaUrl").value;
  if (!url.includes("instagram.com")) {
    alert("올바른 인스타그램 URL을 입력해주세요");
    return;
  }

  const total = mockPosts.length;

  const avgViews =
    mockPosts.reduce((sum, p) => sum + p.views, 0) / total;
  const avgLikes =
    mockPosts.reduce((sum, p) => sum + p.likes, 0) / total;
  const avgComments =
    mockPosts.reduce((sum, p) => sum + p.comments, 0) / total;
  const avgEngagement = avgLikes + avgComments;

  document.getElementById("avgViews").innerText = formatNumber(Math.round(avgViews));
  document.getElementById("avgLikes").innerText = formatNumber(Math.round(avgLikes));
  document.getElementById("avgComments").innerText = formatNumber(Math.round(avgComments));
  document.getElementById("avgEngagement").innerText = formatNumber(Math.round(avgEngagement));
}
