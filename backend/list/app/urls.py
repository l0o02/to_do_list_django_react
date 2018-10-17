from .views import ListViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ListViewSet, base_name='list')
urlpatterns = router.urls