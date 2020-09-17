const dummyData = [
  {idx: 1, ddsource: "csharp", ddtags: "env:staging, application:console", hostname: "i-012345678", message: "2017-03-10 15:13:53.130 ERROR [10] ConsoleApplicat…m mymethod:32 - an error occured while processing"},
  {idx: 2, ddsource: "docker", ddtags: "app:dummydog", hostname: "localhost", message: `172.17.0.1 - - [06/Jan/2017:16:16:37 +0000] "GET /…ike Gecko) Chrome/55.0.2883.87 Safari/537.36" "-"`},
  {idx: 3, ddsource: "iis", ddtags: "service:demo,item:third", hostname: "i-928734421", message: "2002-05-02 17:42:15 172.22.255.255 GET /images/pic…e;MSIE+5.5;+Windows+2000+Server) 200 211 322 1234"},
  {idx: 4, ddsource: "java", ddtags: "cluster:javapp,env:prod,version:1.8", hostname: "cluster01-name", message: "2000-09-07 14:07:41,508 [main] INFO  MyApp - Entering application."},
  {idx: 5, ddsource: "nginx", ddtags: "", hostname: "server-12345", message: "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World"},
  {idx: 6, ddsource: "nodejs", ddtags: "service:payment,env:staging", hostname: "i-182730465", message: "Starting the staging server..."},
  {idx: 7, ddsource: "php", ddtags: "", hostname: "worker187-php", message: `Error message. [dd.span_id="4014120331748607290" dd.trace_id="2762343115747197096"]`},
  {idx: 8, ddsource: "python", ddtags: "lang:python, service:tester, version:1", hostname: "host01-cluster2b-py", message: "2017-12-19T14:37:58,995 INFO  [process.name] [20081] this is my python log"},
  {idx: 9, ddsource: "redis", ddtags: "", hostname: "server.redis.01", message: "12115:M 08 Jan 17:45:41.572 # Server started, Redis version 3.0.6"},
  {idx: 10, ddsource: "ruby", ddtags: "service:api", hostname: "i-274583170", message: `I, [1999-03-03T02:34:24.895701 #19074]  INFO -- : …" for 123.123.123.123 at 1999-03-03 02:34:24+0000`},
  {idx: 11, ddsource: "tomcat", ddtags: "service:app", hostname: "vm-001-app", message: "2000-09-07 14:07:44 INFO org.foo.bar:32 - Entering application."},
  {idx: 12, ddsource: "zookeeper", ddtags: "", hostname: "i-432156780", message: "2000-09-07 14:07:41,508 [main] INFO  MyApp - Entering application."},
  {idx: 13, ddsource: "", ddtags: "", hostname: "", message: ""}
]

export default dummyData;