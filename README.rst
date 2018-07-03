Node study
==========




Express Generator
-----------------

- Pre-requisite

.. code-block:: text

  $ npm install express-generator


..

- How to use

.. code-block:: text

  $ express 


- Default project structure

.. code-block:: text

  .
  ├── README.rst
  ├── app.js
  ├── bin
  ├── node_modules
  ├── package.json
  ├── public
  ├── routes
  ├── views
  └── yarn.lock

MongDB
------
C++로 작성된 NoSQL 중에 하나로 다큐먼트로 이루어진 확장성 높은 데이터 베이스이다.

- Database
  물리적으로 'Collection'들을 포함하는 컨테이너이다. 

- Collection
  'Document'의 그룹을 말한다. 해당 개념은 RDBMS에서 테이블과 동일한 개념이다.
  Collection은 하나의 db에 존재하며, schema를 강제하지 않는다. 
  한 컬렉션 내에 도큐먼트들 중에 하나로 필드가 다른 도큐먼트가 존재할 수 있다.

.. code-block::

  RDBMS - Table - Row - Column - Table Join - PK
  MongoDB - Collection - Document - Field - Embedded - _id


Reference
---------

.. code-block:: 

  https://veranostech.github.io/docs-korean-docutils/docutils/docs/ref/rst/directives_ko.html


