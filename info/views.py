from rest_framework import viewsets
from .serializers import UserInfoSerializer
from .models import UserInfo
from rest_framework.filters import SearchFilter


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserInfoSerializer
    queryset = UserInfo.objects.all()
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    filter_backends = [SearchFilter]
    search_fields = ['first_name', 'email']





