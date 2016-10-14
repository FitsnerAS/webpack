module.exports = function (myApp) {
    myApp.controller('GoodsCtrl', function ($scope, $uibModal,
            $stateParams, shopsCatManagementFactory) {

        $scope.goods = [];
        $scope.postsPerPage = 5;

        $scope.goods = shopsCatManagementFactory.getShopGoods($stateParams.id);
        console.log($scope.goods)
        $scope.loadMore = function () {
            $scope.postsPerPage += 5;
        };

        $scope.addPost = function () {

            $scope.openAddPostModal = $uibModal.open({
                templateUrl: 'angular-app/tmpl/add-post.html',
                size: 'lg',
                scope: $scope
            });

        };

        $scope.editModal = function (currentPost) {

            $scope.editPost = currentPost;

            $scope.openEditPostModal = $uibModal.open({
                templateUrl: 'angular-app/tmpl/edit-post.html',
                size: 'lg',
                scope: $scope
            });
        };

        $scope.editCurrentPost = function (post) {

            shopsCatManagementFactory.setUpdatedGood(post);

            $scope.openEditPostModal.dismiss();

        };

        $scope.addNewPost = function (post) {

            shopsCatManagementFactory.setNewGood(post, $stateParams.id);
            $scope.goods.unshift(post);

            $scope.postsPerPage += 1;
            $scope.openAddPostModal.dismiss();

        };
    });
};