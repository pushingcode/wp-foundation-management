<template>
    <div>
        <h3 class="title is-3">{{ $t('welcomeMsg') }}</h3>
        <div class="columns is-multiline is-desktop">
            <div class="column is-one-quarter">
                <aside class="menu">
                    <p class="menu-label">
                        {{$t('menuLevelT1')}}
                    </p>
                    <ul class="menu-list">
                        <li><a>{{$t('menuLevelT1E1')}}</a></li>
                        <li><a>{{$t('menuLevelT1E2')}}</a></li>
                    </ul>
                    <p class="menu-label">
                        {{$t('menuLevelT2')}}
                    </p>
                    <ul class="menu-list">
                        <li><a>{{$t('menuLevelT2E1')}}</a></li>
                        <li><a>{{$t('menuLevelT2E2')}}</a></li>
                        <li><a>{{$t('menuLevelT2E3')}}</a></li>
                        <li><a>{{$t('menuLevelT2E4')}}</a></li>
                    </ul>
                    <p class="menu-label">
                        {{$t('menuLevelT3')}}
                    </p>
                    <ul class="menu-list">
                        <li><a>Payments</a></li>
                        <li><a>Transfers</a></li>
                        <li><a>Balance</a></li>
                    </ul>
                </aside>
            </div>
            <div class="column">
                <code>main content</code>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainApp',
    props: {
        msg: String
    }
}
</script>
